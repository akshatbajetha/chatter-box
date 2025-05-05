import { StyleSheet, TextInput, TextInputProps } from "react-native";

export default function Input(props: TextInputProps) {
  const { style, ...rest } = props;
  return (
    <TextInput
      {...rest}
      style={StyleSheet.flatten([
        {
          padding: 18,
          fontSize: 16,
          borderRadius: 10,
          backgroundColor: "#262626",
          color: "#fff",
        },
        style,
      ])}
    />
  );
}
