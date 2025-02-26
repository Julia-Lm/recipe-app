import { Layout } from "widgets/index";
import { observer } from "mobx-react-lite";
import { RecipeHub } from "app/store/recipe/recipe.store";

export const RecipeHome = observer(() => {
  const { recipes } = RecipeHub;
  console.log("recipes", recipes);
  return <Layout>Home</Layout>;
});
