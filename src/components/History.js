import { ScrollView, View, Text, FlatList, StyleSheet } from "react-native";
import { colors } from '../utils/colors';
import { spacing, fontSizes } from '../utils/sizes';

const Item = ({ item: { subject, totalTime, timeSpent }}) => {
    return (
        <View style={[styles.container, styles.shadowProp]}>
            <Text style={styles.title}>{subject}</Text>
            <View style={styles.detailsContainer}>
                <Text style={styles.details}>Planed: <Text style={styles.detailsTime}>{totalTime}</Text></Text>
                <Text style={styles.details}>Focused: <Text style={styles.detailsTime}>{timeSpent}</Text></Text>
            </View>
        </View>
    )
}

export const History = ({ doneList }) => {
    return (
    <FlatList
        data={doneList}
        renderItem={({ item }) => <Item item={item}/> }
        keyExtractor={(item) => item.id}
    />
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.emerald,
        marginHorizontal: spacing.lg,
        margin: spacing.sm,
        padding: spacing.md,
    },
    title: {
        fontSize: fontSizes.md,
        fontWeight: 'bold',
        marginBottom: spacing.sm,
        color: colors.redBaen
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    details: {
        fontSize: fontSizes.md,
        color: colors.redBaen
    },
    detailsTime: {
        fontSize: fontSizes.md,
        fontWeight: 'bold'
    },
    shadowProp: {
        shadowColor: colors.darkCyan,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

})