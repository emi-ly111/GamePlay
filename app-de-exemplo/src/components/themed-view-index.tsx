import { StyleSheet, View, type ViewProps } from 'react-native';

import { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: ThemeColor;
};

export function ThemedView({ style, lightColor, darkColor, type, ...otherProps }: ThemedViewProps) {
  const theme = useTheme();

  return <View style={[{ backgroundColor: theme[type ?? 'background'] }, style]} {...otherProps} />;
}
export const styles = StyleSheet.create({
    login: {
        backgroundColor: '#0A1033',
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imagesContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'translateY(-90px)'
    },
    imageStreetFighter: {
        width: 550,
        height: 500,
        position: 'absolute',
        zIndex: 1
    },
    backgroundImageStreetFighter: {
        width: 550,
        height: 400
    },
    title: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    containerTitle: {
        position: 'absolute',
        marginTop: 100
    },
    button: {
        backgroundColor: '#E51C44',
        width: 300,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderRadius: 10,
        position: 'absolute',
        marginTop: 420,
        justifyContent: 'center'
    },
    discordLogo: {
        marginLeft: 20
    },
    buttonText: {
        alignSelf: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15
    }
});
