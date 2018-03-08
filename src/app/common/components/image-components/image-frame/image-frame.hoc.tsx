

const ImageFrame = propsArgs => ComponentArg => {

    const withProps = props => <ComponentArg {...propsArgs } {...props}/>

    return withProps;

}