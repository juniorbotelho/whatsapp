const Text = ({children, type}) => {
  const text = `component_text mb_middle ${type}`;

  return (
    <div className={text}>
      <p className="text">
        {children}
      </p>
    </div>
  )
}

export default Text
