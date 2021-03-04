const Title = ({children, type}) => {
  const title = `component_title mb_middle ${type}`

  return (
    <h1 className={title}>
      <p className={title + 'title'}>
        {children}
      </p>
    </h1>
  );
}

export default Title
