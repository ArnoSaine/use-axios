export default function Aside() {
  return (
    <aside className="learn">
      <header>
        <h3>use-axios</h3>
        <h5>Example</h5>
        <a href="https://github.com/ArnoSaine/use-axios/tree/main/todoapp">
          Source
        </a>
      </header>
      <hr />
      <h4>Official Resources</h4>
      <ul>
        {[
          {
            url: 'https://github.com/ArnoSaine/use-axios',
            text: 'use-axios',
          },
          {
            url: 'https://github.com/axios/axios',
            text: 'axios',
          },
          {
            url: 'https://github.com/Visma-AS/visma/tree/main/packages/msw-openapi-backend-integration',
            text: '@visma/msw-openapi-backend-integration',
          },
          {
            url: 'https://github.com/ArnoSaine/postinumero/tree/main/packages/use-async',
            text: '@postinumero/use-async',
          },
          {
            url: 'https://mswjs.io',
            text: 'msw',
          },
          {
            url: 'https://github.com/anttiviljami/openapi-backend',
            text: 'openapi-backend',
          },
        ].map(({ text, url }) => (
          <li key={url}>
            <a href={url}>{text}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
