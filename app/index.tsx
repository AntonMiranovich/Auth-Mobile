import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import imgPage1 from './assets/imagePage1.png'
import imgArrow from './assets/arrowleft.png'
import { Link } from 'expo-router'


export default function index() {
    return <>
        <View style={styles.wrapper}>
            <Image source={imgPage1} style={styles.fon}></Image>
            <Text style={styles.texth}>An Evolving</Text>
            <Text style={styles.texth}>collection of treatments</Text>
            <Text style={styles.textto}>The Ordinary is born to disallow commodity to be disguised as ingenuity. The Ordinary is "Clinical formulations with integrity".</Text>
            <Link href={"/favorite"}>
                <TouchableOpacity style={styles.btn}><Image source={imgArrow}></Image></TouchableOpacity>
            </Link>
        </View>
    </>
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        backgroundColor: '#ECEADE',
        height: '100%'
    },
    fon: {
        width: '100%'
    },
    texth: {
        fontSize: 26,
        fontWeight: 500,
    },
    textto: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 24,
    },
    btn: {
        marginTop: 40,
        width: 72,
        height: 68,
        backgroundColor: '#A2AA7B',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }
})