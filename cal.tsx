import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Calculator() {
  const [value, setValue] = useState("");

  const handlePress = (val: string) => {
    if (val === "=") {
      try {
        setValue(eval(value).toString());
      } catch {
        setValue("Error");
      }
    } else if (val === "C") {
      setValue("");
    } else {
      setValue(value + val);
    }
  };

  const Button = ({
    title,
    bg = "#2A2A2A",
    color = "white",
  }: {
    title: string;
    bg?: string;
    color?: string;
  }) => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => handlePress(title)}
      style={{
        width: 72,
        height: 72,
        backgroundColor: bg,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 18,
        margin: 8,

        // Shadow (beautiful look)
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
      }}
    >
      <Text style={{ color, fontSize: 26, fontWeight: "600" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0F172A",
        justifyContent: "flex-end",
        padding: 20,
      }}
    >
      {/* Display */}
      <View style={{ marginBottom: 30 }}>
        <Text
          style={{
            color: "#E5E7EB",
            fontSize: 48,
            textAlign: "right",
            fontWeight: "300",
          }}
        >
          {value || "0"}
        </Text>
      </View>

      {/* Buttons */}
      <View style={{ alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <Button title="C" bg="#EF4444" />
          <Button title="/" bg="#F59E0B" />
          <Button title="*" bg="#F59E0B" />
          <Button title="-" bg="#F59E0B" />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Button title="7" />
          <Button title="8" />
          <Button title="9" />
          <Button title="+" bg="#F59E0B" />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Button title="4" />
          <Button title="5" />
          <Button title="6" />
          <Button title="=" bg="#22C55E" />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Button title="1" />
          <Button title="2" />
          <Button title="3" />
          <Button title="0" bg="#1E293B" />
        </View>
      </View>
    </View>
  );
}