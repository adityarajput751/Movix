import { StyleSheet } from "react-native";
import { dynamicSize, normalizeFont } from "../../utils/responsive";
import { ColorConstants } from "../../constants/ColorConstatnts";

export const styles = StyleSheet.create({
    container: {marginVertical: dynamicSize(10)},
    imageContainer: {flexDirection: 'row', alignItems: 'center'},
    image: {
        height: dynamicSize(25),
        width: dynamicSize(35),
        tintColor: ColorConstants.BLACK,
      },
      text: {
        fontSize: normalizeFont(18),
        color: ColorConstants.BLACK,
        fontWeight: '700',
        marginLeft: dynamicSize(5),
      }
})