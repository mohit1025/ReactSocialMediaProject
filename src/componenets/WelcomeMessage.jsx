export default function WelcomeMessage({onGetPostClick}) {
  return (
    <div className="center">
      <h1 className="welcome-message">There are no Post to show</h1>
      <button type="button" className="btn btn-primary btn-lg" onClick={onGetPostClick}>Fetch new Posts</button>
    </div>
  );
}
