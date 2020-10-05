/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/display-name */
import CodeBlock from '../components/CodeBlock';

const MDXComponents = {
  // h1: props => <h1 style={{ color: 'tomato' }} {...props} />,
  // h1: props => <StyledH1 {...props} />,
  // code: StyledCode,
  code: props => <CodeBlock {...props} />
};

export default MDXComponents;
