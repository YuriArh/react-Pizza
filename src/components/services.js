import { useHttp } from "../hooks/http.hooks";

const usePizzaService = () => {
  const { loading, request, error } = useHttp();

  const getPizzas = async (categoryId, sortName, currentPage) => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const res = await request(
      `https://62d6d3ba49c87ff2af2e0abf.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortName}&order=desc`
    );
    return res;
  };

  const getCategoryPizzas = async () => {
    const res = await request(
      "https://62d6d3ba49c87ff2af2e0abf.mockapi.io/items"
    );
    return res;
  };

  return { error, loading, getPizzas };
};

export default usePizzaService;
