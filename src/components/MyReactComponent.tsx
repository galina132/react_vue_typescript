import Vue from 'vue'
const VuePlugin = require('vuera');
const React = require ('react');
const Component = require ('react');
Vue.use(VuePlugin);

// JavaScript class Date
type ClockState = {
    time: Date
}

// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.
export class MyReactComponent extends Component<{}, ClockState> {

    // The tick function sets the current state. TypeScript will let us know
    // which ones we are allowed to set.
    tick() {
        this.setState({
            time: new Date()
        });
    }

    // Before the component mounts, we initialise our state
    componentWillMount() {
        this.tick();
    }

    // After the component did mount, we set the state each second.
    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    }

    // render will know everything!
    render() {
        return <p>The current time is {this.state.time.toLocaleTimeString()}</p>
    }
}
