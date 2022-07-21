import { useHttp } from "../hooks/http.hooks";

const usePizzaService = () => {
    const { loading, request, error } = useHttp();

    const getAllPizzas = async () => {
        const res = await request(
            "https://62d6d3ba49c87ff2af2e0abf.mockapi.io/items"
        );
        return res;
    };

    return { error, loading, getAllPizzas };
};

export default usePizzaService;
