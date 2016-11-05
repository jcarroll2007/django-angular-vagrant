import <%= name %> from '<%= componentPath %>';

describe('<%= name %>', () => {
    beforeEach(window.module(<%= name %>));
});