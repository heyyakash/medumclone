import { sanityClient,urlFor } from "../../mediumsanitybuild/sanity"

const Content = ({post}) => {
    console.log(post);
    
  return (
    <div>

    </div>
  )
}

export default Content;

export const getStaticPaths = async () => {
    const query =  `*[_type == 'post']{
        _id,
        slug{
          current,
        }
      }`;
    const posts = await sanityClient.fetch(query);
    const paths = posts.map((post)=> ({
        params:{
            slug:post.slug.current
        }
    }));
    return{
        paths,
        fallback:"blocking"
    }
}

export const getStaticProps = async({params})=>{
    const query = `*[_type == 'post' && slug.current == $slug]{
        _id,
        _createdAt,
        author{
        name,
        image,
      },
      mainImage,
      body,
        slug{
          current,
        }
      }`;
      const post = await sanityClient.fetch(query,{
          slug:params?.slug
      });
      console.log(params.slug);
      
      console.log(post);
      
      if(!post){
          return{
              notFound:true
          } 
      }
      return{
          props:{
              post:post[0]
          },
          revalidate:60,
      }
}