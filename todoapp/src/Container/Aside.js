export default () => (
  <aside className="learn">
    <header>
      <h3>use-axios</h3>
      <h5>Example</h5>
      <a href="https://github.com/ArnoSaine/use-axios/tree/master/todoapp">
        Source
      </a>
    </header>
    <hr />
    <h4>Official Resources</h4>
    <ul>
      {[
        {
          url: 'https://github.com/ArnoSaine/use-axios',
          text: 'use-axios'
        },
        {
          url: 'https://github.com/axios/axios',
          text: 'axios'
        }
      ].map(({ text, url }) => (
        <li key={url}>
          <a href={url}>{text}</a>
        </li>
      ))}
    </ul>
  </aside>
);
