import React from "react";
import View from "./View";
import Colors from "../Colors";

export default function Divider()
{
    return <View style={{ height: 1, backgroundColor: `${Colors.grey}75`, marginTop: 5 }} />;
}