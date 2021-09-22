import { Component, h, Host } from '@stencil/core';
import { Helmet } from '@stencil/helmet';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <Host>
        <Helmet>
          <title>Home</title>
        </Helmet>

        <div class="app-home">
          <p>
            Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
            <a href="https://stenciljs.com">stenciljs.com</a> to get started.
          </p>

          <stencil-route-link url="/profile/stencil">
            <button>Profile page</button>
          </stencil-route-link>
        </div>
      </Host>
    );
  }
}
