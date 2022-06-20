class Machine extends React.Component {
  render() {
    const ify = false;
    console.log(this.props);
    return (
      <div className={ify ? "Ify" : ""}>
        <p>
          From {this.props.from} To {this.props.to}
        </p>
      </div>
    );
  }
}
