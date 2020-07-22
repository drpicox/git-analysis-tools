import graphQLFetcher from "./graphQLFetcher";

export default (owner, repo) => {
  return graphQLFetcher({
    operationName: "QueryRepositoryMovements",
    query: `
    query QueryRepositoryMovements($repoOwner: String!, $repoName: String!) {
      repository(owner: $repoOwner, name: $repoName) {
        issues(first: 100) {
          nodes {
            ...repositoryIssue
          }
        }
      }
    }
    
    fragment repositoryIssue on Issue {
      title
      number
      url
      author { login }
      body
      userContentEdits(first: 10) {
        nodes {
          diff
          editor { login }
        }
      }
      ...issueTimeline
      labels(first: 10) {
        nodes {
          name
        }
      }
      projectCards(first: 1) {
        nodes {
          column {
            name
          }
        }
      }
    }
    
    fragment issueTimeline on Issue {
      timelineItems(first: 99) {
        nodes {
          __typename
          ... on MovedColumnsInProjectEvent {
            actor {
              login
            }
            previousProjectColumnName
            projectColumnName
          }
          ... on CrossReferencedEvent {
            source {
              __typename
              ... on PullRequest {
                number
                url
                merged
                author {
                  login
                }
                reviews(first: 49) {
                  nodes {
                    author {
                      login
                    }
                    state
                  }
                }
                mergedBy {
                  login
                }
                mergeCommit {
                  commitUrl
                }
              }
            }
          }
        }
      }
    }    
      `,
    variables: { repoOwner: owner, repoName: repo }
  });
};
