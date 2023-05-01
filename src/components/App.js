import { RecipeList } from './RecipeList/RecipeList';
import initialRecipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Component } from 'react';

export class App extends Component {
  state = {
    recipes: initialRecipes,
  };
  render() {
    return (
      <Layout>
        <div>Recipe Form</div>
        <RecipeList items={this.state.recipes} />
        <div>Image modal</div>
        <GlobalStyle />
      </Layout>
    );
  }
}
