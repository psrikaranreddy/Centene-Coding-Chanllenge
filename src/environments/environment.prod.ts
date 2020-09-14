export const environment = {
  production: true,
  baseUrl:'http://localhost:8081',
  urls: {
    allEnrollees: (url)=> `${url}/enrollees`,
    enrolleeById: (id,url) => `${url}/enrollees/${id}`,
  }

};
