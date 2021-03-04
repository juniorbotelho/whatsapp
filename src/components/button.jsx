export const FlatButton = ({children, title}) => (
  <div className="component_flat">
    <a className="button" href="#error">
      {children}
      <h3 className="button_title">
        {title}
      </h3>
    </a>
  </div>
)
