import Colors from "_styles/colors";
import {
  fixedHeight,
  fixedWidth,
  STATUSBAR_HEIGHT,
  ScreenHeight,
  ScreenWidth,
} from "_styles/dimension";
//// This Stylesheet belongs to  HomeScreen
export default styles = {

  container: {
    width: '100%',
    marginTop: 5,
    height: 50,
    marginBottom: fixedWidth * 2.0,
    paddingLeft: fixedWidth * 12.0,
    paddingRight: fixedWidth * 12.0,
    borderRadius: fixedWidth * 10,
    borderWidth: 1,
    borderColor: Colors.silver,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // This ensures that the inner container uses available space
  },
  iconWrapper: {
    marginRight: fixedWidth * 8.0, // Space between the icon and the input field
  },
  icon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  inputWrapper: {
    flex: 1, // Allows the input field to use the remaining space
  },
  textInput: {
    width: '100%',
    height: '100%',
    borderWidth: 0,
    borderColor: 'transparent', // No border for the TextInput
    paddingVertical: 0, // Remove vertical padding
    paddingHorizontal: fixedWidth * 8.0, // Adjust padding inside the input
  },
  buttonWrapper: {
    marginLeft: fixedWidth * 8.0, // Space between the input field and the button
  },
  button: {
    width: fixedWidth * 35.0,
    height: fixedWidth * 35.0,
    backgroundColor: Colors.silver,
    borderRadius: fixedWidth * 8,
    borderWidth: 1,
    borderColor: Colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    width: fixedWidth * 20.0,
    height: fixedWidth * 20.0,
  },
};
