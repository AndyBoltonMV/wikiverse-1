export function Article(props) {
  return (
    <>
      <h3>{props.page.title}</h3>
      <h4> Author: {props.page.author.name}</h4>
      <h4>Content: {props.page.content}</h4>
      <h4>
        Tags:{" "}
        {props.page.tags.map((tag, i) => (
          <p key={i}>{tag.name}</p>
        ))}
      </h4>
      <h4>Published: {props.page.createdAt}</h4>
      <button onClick={() => props.setArticle()}>Back to Wiki List</button>
    </>
  );
}
