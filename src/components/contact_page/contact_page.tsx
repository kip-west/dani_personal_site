export function ContactPage() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        My clients tend to be people in leadership positions, front line
        workers, creatives, and spiritual seekers looking for powerful
        techniques to transform their personal and professional lives.
      </p>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-2 border-gray-300 rounded-md p-2 ml-1"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-2 border-gray-300 rounded-md p-2 ml-1"
          />
        </div>
      </form>
    </div>
  );
}
