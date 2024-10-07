const parseEnv = () => {
    const rss_variables = Object.entries(process.env)
        .filter(([key]) => key.startsWith("RSS_"))
        .map(([key, value]) => `${key} = ${value}`);
    
    console.log(rss_variables.join('; '));    
};

parseEnv();