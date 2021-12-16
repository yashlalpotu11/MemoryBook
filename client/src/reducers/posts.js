//initial state post =[] empty array
const posts = (posts = [], action) => {
    switch (action.type) {
      case "FETCH_ALL":
        return action.payload;
      case "CREATE":
        return [...posts, action.payload];
      case "UPDATE":
        return posts.map((post) => 
          post._id === action.payload._id ? action.payload : post
          // if(post._id === action.payload._id) {
          //   return [...posts, action.payload];
          // }
          // else{
          //   return post
          // }
        
        );
      case "LIKE":
        return posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
      case "DELETE":
        return posts.filter((post) => post._id !== action.payload);
      default:
        return posts;
    }
  };
  export default posts;