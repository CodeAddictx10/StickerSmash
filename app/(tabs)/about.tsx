import { StyleSheet, Text, View } from 'react-native'
export default function AboutScreen() {
  return (
      <View>
          <Text style={styles.text}>
              1. Choose an image from your gallery by click on the{" "}
              <Text style={styles.emphasis}>"Choose a photo"</Text>
          </Text>
          <Text style={styles.text}>
              2. Crop the image selected to your taste and click on continue
          </Text>
          <Text style={styles.text}>
              3. Click on the{" "}
              <Text style={styles.emphasis}>+ circled button</Text> to select
              sticker to add
          </Text>
          <Text style={styles.text}>
              4. After selecting sticker:{" "}
              <Text style={styles.emphasis}>
                  you can doubled tab to increased the size
              </Text>{" "}
              and{" "}
              <Text style={styles.emphasis}>
                  you can also move the sticker in any direction
              </Text>{" "}
          </Text>
          <Text style={styles.text}>
              5. Finally, click on the  <Text style={styles.emphasis}>save button</Text>{" "}
             to save the image on your device.
          </Text>
      </View>
  );
}
const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        marginHorizontal: 10,
        marginBlock: 10,
    },
    emphasis: {
      fontWeight: "700"
    }
});