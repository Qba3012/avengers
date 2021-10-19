interface ApiSeriesResponse {
    data: {
        results: [
            {
                id: number;
                title: string;
                description: string;
            }
        ]
    }
}

export default ApiSeriesResponse;