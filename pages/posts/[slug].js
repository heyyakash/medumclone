import Header from "../../components/Header";
import { useState } from "react";
import { sanityClient, urlFor } from "../../mediumsanitybuild/sanity";
import PortableText from "react-portable-text";
import { IoMdArrowBack } from 'react-icons/io'
import Link from 'next/link';
import Comment from "../../components/Comment";

const Content = ({ post }) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <Header />
      <div className="max-w-[800px] w-full gap-5 pb-8 mb-4 md:bg-white flex flex-col md:rounded-2xl overflow-hidden md:drop-shadow-2xl mx-auto">
        <div className="w-full h-[180px] relative">
          <div className="absolute top-3 left-3 bg-white p-2 rounded-full cursor-pointer hover:scale-[1.1] transition-all duration-200">
            <Link href="/">
              <IoMdArrowBack />
            </Link>
          </div>
          <img src={urlFor(post.mainImage)} className="object-cover w-full h-full" alt="main image" />
        </div>
        <div className="px-5" >
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="font-extralight">{post.description}</p>
        </div>
        <div className="flex  justify-start px-5 gap-2 items-center">
          <img src={urlFor(post.author.image)} alt="profile image" className="rounded-full w-10 h-10" />
          <p>By {post.author.name}<span className="font-extralight"> at {new Date(post._createdAt).toLocaleString()}</span></p>
        </div>
        <div className="px-5">
          <PortableText
            className=""
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            content={post.body}
            serializers={
              {
                image: (props) => {
                  return (<img src={urlFor(props).url()} className="rounded-[20px]" alt="featured" />)
                },
                h1: (props) => {
                  return (<h1 className="text-2xl font-bold" {...props}></h1>)
                },
                h2: (props) => {
                  return (<h1 className="text-xl" {...props}></h1>)
                },
              }
            }
          />
        </div>
      </div>
      {submitted ?
        (
          <div className="max-w-[800px] my-5 p-4 drop-shadow-xl rounded-[20px] w-full mx-auto bg-white">
            <h3 className="text-md">
              Thank you for your submission. Your comment will appear here after review!
            </h3>
          </div>
        )

        :
        <Comment id={post._id} submitted={submitted} setSubmitted={setSubmitted} />
      } 
      {post.comments &&
      <div className="max-w-[800px] flex mb-4 flex-col my-5 p-4 drop-shadow-xl rounded-[20px] w-full mx-auto bg-white">
        {post.comments.map((comment)=>{
          return (
            <p><span className="font-semibold">{comment.name}</span> <span>{comment.comment}</span> </p>
          )
        })}
        </div>}

      
    </div>
  )
}

export default Content;

export const getStaticPaths = async () => {
  const query = `*[_type == 'post']{
        _id,
        slug{
          current,
        }
      }`;
  const posts = await sanityClient.fetch(query);
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current
    }
  }));
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const query = `*[_type == 'post' && slug.current == $slug]{
        _id,
        _createdAt,
        author -> {
        name,
        image,
      },
      'comments':*[_type=='comment' && post._ref == ^._id && approved == true],
      title,
      description,
      mainImage,
      body,
        slug{
          current,
        }
      }`;
  const post = await sanityClient.fetch(query, {
    slug: params?.slug
  });
  console.log(post);
  
  if (!post) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      post: post[0]
    },
    revalidate: 60,
  }
}