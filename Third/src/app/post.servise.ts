export default class PostServise{
    items=[
        { 
          id:1,
          title:"Vue.js",
          author:"John",
          post:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, ut."
        },
        { 
          id:2,
          title:"React",
          author:"Tom",
          post:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, ut."
        },
      ];
      id="";
      title = "";
      post = "";
      author = "";
      addPost(obj){        
        this.items.push(obj); 
      }
}