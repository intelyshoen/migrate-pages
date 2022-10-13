import React from 'react';

const RelationContext = React.createContext();

export const RelationProvider = RelationContext.Provider;
export const RelationConsumer = RelationContext.Consumer;

export default RelationContext;
