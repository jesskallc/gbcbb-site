import fetch from 'node-fetch'
import ApolloClient, { gql } from 'apollo-boost';  

export const SITE_SETTINGS = gql`
    query {
        setting{
            siteTitle
            brandLogo{
                url
                formats      
            }
        }
    }
`;

export const FRONTPAGE = gql`
    query {
        frontPage{
            header
            info{
                header
                body
                map{
                    place_id
                    place_name
                }
            }
            events{
                categories{
                    title
                }
            }
            Newsletter{
                newsletter{
                    provider
                    name
                }
            }
            hero{
                url
                formats
            }
            style_hero
        }
    }
`;

const client = new ApolloClient({ 
    uri: `${process.env.CMS_BASE_URL}${process.env.CMS_GRAPHQL_ENDPOINT}`,
    fetch: fetch
});
  
export default client;