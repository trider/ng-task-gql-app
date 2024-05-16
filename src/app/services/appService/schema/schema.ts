import gql from 'graphql-tag';

export const AppQuery = gql`
  query appQuery($api:String, $command:String, $payload:JSON){
    appQuery(
       api:$api
       command:$command
       payload:$payload
    )
  }
`;


export const AppRun = gql`
  mutation appRun($api:String, $command:String, $payload:JSON){
    appRun(
       api:$api
       command:$command
       payload:$payload
    )
  }
`;


export const GET_USERS = gql`
  query getUsers($payload:JSON){
    getUsers(
       payload:$payload
    )
  }
`;

export const GET_USER = gql`
  query getUser($payload:JSON){
    getUser(
       payload:$payload
    )
  }
`;


export const GET_TASKS = gql`
  query getTasks($payload:JSON){
    getTasks(
       payload:$payload
    )
  }
`;

export const GET_TASK = gql`
  query getTask($payload:JSON){
    getTask(
       payload:$payload
    )
  }
`;





export const LOGIN = gql`
  mutation login($payload:JSON){
    login(
       payload:$payload
    )
  }
`;



export const CREATE_TASK = gql`
  mutation createTask($payload:JSON){
    createTask(
       payload:$payload
    )
  }
`;

export const UPDATE_TASK = gql`
  mutation updateTask($payload:JSON){
    updateTask(
       payload:$payload
    )
  }
`;


export const DELETE_TASK = gql`
  mutation deleteTask($payload:JSON){
    deleteTask(
       payload:$payload
    )
  }
`;