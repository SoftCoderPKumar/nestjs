require('dotenv-safe').config({
    allowEmptyValues: true
  })

  let config: {
    googleCloudProject: string
    googleCloudProjectID: string
    googleCloudDatabaseUrl: string
    googleCloudStorageBucket: string
    mode:string
  }

  export const override = false

  if (override || process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'beta') {
    config = {
        googleCloudProject: 'anchor-point',
        googleCloudProjectID: 'anchor-point-328412',
        googleCloudDatabaseUrl: 'https://anchor-point-328412-default-rtdb.firebaseio.com/',
        googleCloudStorageBucket: '',
        mode: 'production',
    }
    if (process.env.NODE_ENV === 'beta') {
        config.mode = 'beta'
    }
  } else if (process.env.NODE_ENV === 'staging' || process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'test') {
    config = {
        googleCloudProject: 'anchor-point-staging',
        googleCloudProjectID: 'anchor-point-staging',
        googleCloudDatabaseUrl: 'https://anchor-point-staging-default-rtdb.firebaseio.com/',
        googleCloudStorageBucket: '',
        mode: 'staging',
    }
    if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'test') {
      config.mode = 'dev'
    }
  }
  
  export default config
  