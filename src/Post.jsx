import "./Friend.css";
export default function Post({ post }) {
  const { title, body, id, userid } = post;
  return (
    <div className="box">
      <h5>Title:{title}</h5>
      <p>
        <small>userId:{userid}</small>
      </p>
      <p>
        <small>postsId:{id}</small>
      </p>
      <p>{body}</p>
    </div>
  );
}
