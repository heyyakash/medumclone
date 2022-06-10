import Header from "../../components/Header";
import { sanityClient, urlFor } from "../../mediumsanitybuild/sanity";
import PortableText from "react-portable-text";

const Content = ({ post }) => {
  console.log(post);

  return (
    <div>
      <Header />
      <div className="max-w-[800px] w-full gap-5 pb-8 md:bg-white flex flex-col md:rounded-2xl overflow-hidden md:drop-shadow-2xl mx-auto">
        <div className="w-full h-[180px]">
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
                  return (<img src={urlFor(props).url()} className = "rounded-[20px]" alt="featured" />)
                },
              }
            }
          />
        </div>
      </div>
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
    fallback: "blocking"
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
  console.log(params.slug);

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