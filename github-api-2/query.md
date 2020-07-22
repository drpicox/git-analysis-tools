{
  repository(owner: "TC-LS2", name: "adventure-game-dublin") {
    issues(first: 100) {
      nodes {
        ...repositoryIssue
      }
    }
  }
}

fragment repositoryIssue on Issue {
  createdAt
  title
  number
  url
  repository {
    url
    name
    homepageUrl
  }
  author {
    login
  }
  body
  userContentEdits(first: 10) {
    nodes {
      createdAt
      diff
      editor {
        login
      }
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
        createdAt
        actor {
          login
        }
        previousProjectColumnName
        projectColumnName
      }
      ... on CrossReferencedEvent {
        createdAt
        source {
          __typename
          ... on PullRequest {
            createdAt
            number
            url
            merged
            closed
            author {
              login
            }
            repository {
              url
              name
            }
            reviews(first: 49) {
              nodes {
                url
                createdAt
                author {
                  login
                }
                state
              }
            }
            mergedAt
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
