import "../../styles/components/layout/container.sass"

const Container = (props: any) => {
  return <div className="container">{props.children}</div>;
};

export default Container;
