import fetch from 'node-fetch'
// import ApolloClient, { gql } from 'apollo-boost';  

// export const SITE_SETTINGS = gql`
//     query {
//         setting{
//             siteTitle
//             brandLogo{
//                 url
//                 formats      
//             }
//         }
//     }
// `;

// export const FRONTPAGE = gql`
//     query {
//         frontPage{
//             header
//             info{
//                 header
//                 body
//                 map{
//                     place_id
//                     place_name
//                 }
//             }
//             events{
//                 categories{
//                     title
//                 }
//             }
//             Newsletter{
//                 newsletter{
//                     provider
//                     name
//                 }
//             }
//             hero{
//                 url
//                 formats
//             }
//             style_hero
//         }
//     }
// `;

export async function getSettings() {
    const body = {
        endpoint: "https://insitedatasolutions.com/graphql"
    }

    // const res = fetch(`${process.env.API_ENDPOINT}/site/settings`, {
    //     body: JSON.stringify(body),
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // })
    // .then(res => {
    //     return res.json()
    // })
    // .catch(err => {
    //     console.log(`fetch settings error`)
    // })
    const res = fetch(`https://api-dev.jesska.workers.dev/site/settings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({endpoint: "https://insitedatasolutions.com/graphql"}),
    })
    .then(res => {
        return res.json()
    })
    .catch(err => {
        console.log(`fetch settings error ${err}`)
    })

    return res
}

export async function getFrontPage() {
    const body = {
        endpoint: "https://insitedatasolutions.com/graphql"
    }

    // const res = await fetch(`${process.env.API_ENDPOINT}/site/frontpage`, {
    //     body: JSON.stringify(body),
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // })
    // .catch(err => {
    //     console.log(`fetch frontpage error ${err}`)
    // })
    const res = fetch(`https://api-dev.jesska.workers.dev/site/frontpage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({endpoint: "https://insitedatasolutions.com/graphql"}),
    })
    .then(res => {
        return res.json()
    })
    .catch(err => {
        console.log(`fetch frontpage error ${err}`)
    })

    return res;
}
