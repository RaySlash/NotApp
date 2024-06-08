import { StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

const Card = (props: { header: string; content: string }) => {
  return (
    <ThemedView style={styles.cardContainer}>
      <ThemedText style={styles.cardHeader} type="subtitle">
        {props.header}
      </ThemedText>
      <ThemedText style={styles.cardContent}>{props.content}</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default Card;
