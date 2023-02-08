function Blog(props) {
  //   const sideBar = (
  //     <ul>
  //       {props.posts.map((post) => (
  //         <li key={post.id}>{post.title}</li>
  //       ))}
  //     </ul>
  //   );

  const Content = props.posts.map((post) => (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.Content}</p>
    </div>
  ));

  return (
    <div>
      {/* <sideBar /> */}
      <h1>Hello world </h1>
      <Content />
    </div>
  );
}

// function Blog(props) {
//     const sidebar = (
//       <ul>
//         {props.posts.map((post) =>
//           <li key={post.id}>
//             {post.title}
//           </li>
//         )}
//       </ul>
//     );
//     const content = props.posts.map((post) =>
//       <div key={post.id}>
//         <h3>{post.title}</h3>
//         <p>{post.content}</p>
//       </div>
//     );
//     return (
//       <div>
//         {sidebar}
//         <hr />
//         {content}
//       </div>
//     );
//   }

export default Blog;
