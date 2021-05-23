import React from "react";
import { SafeAreaView, StyleSheet, View, StatusBar } from "react-native";

import { Searchbar } from "react-native-paper";
import styled from "styled-components";

import RestaurantInfoCardComponent from "../components/RestaurantInfoCardComponent";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
const SearchContainer = styled(View)`
  padding: 16px;
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
`;

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>

      <RestaurantListContainer>
        <RestaurantInfoCardComponent />
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default RestaurantsScreen;
