import React from 'react';
import {  View, ActivityIndicator, Image,  } from 'react-native';
import { firebase } from '../../firebase/config'

export default class AsyncImage extends React.Component {

    constructor(props) {
        super(props);
        this.state =
            {
                loading: true,
                mounted: true,
                image: "/images/logoblue.jpg",
                url: "",
            }
    }

    componentDidMount() {
        this.setState({ isMounted: true })
        this.getAndLoadHttpUrl()
    }

    async getAndLoadHttpUrl() {
        const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006_edit_1.jpg'

        if (this.state.mounted == true) {
            const ref = firebase.storage().ref(this.props.image);
            ref.getDownloadURL().then(data => {
                this.setState({ url: data })
                this.setState({ loading: false })
            }).catch(error => {
                this.setState({ url: defaultImage })
                this.setState({ loading: false })
            })
        }
    }

    componentWillUnmount() {
        this.setState({ isMounted: false })
    }

    componentWillReceiveProps(props) {
        this.props = props
        if (this.props.refresh == true) {

        }
    }

    render() {
        if (this.state.mounted == true) {
            if (this.state.loading == true) {
                return (
                    <View key={this.props.image} style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                        <ActivityIndicator />
                    </View>
                )
            }
            else {
                return (
                    <Image style={this.props.style} source={{uri: this.state.url}} />
                )
            }
        }
        else {
            return null
        }
    }
}