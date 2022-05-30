import{
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";
import React,{useEffect} from "react";
import Seperator from "../component/Seperator";
import axios from "axios";
import { BooksellerContext,useContext } from "../context";