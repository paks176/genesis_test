type resultItem = {
    id: string,
    name: string,
}

type State = {
    selectedAction: string | undefined;
    results: resultItem[] | [];
}

type Mutations = {
    changeAction(context: any, selectAction: State["selectedAction"]): void;
}

type Getters = {
    getResults(state: State): State["results"];
}

type Actions = {
    setAction(state: State, selectAction: string): void;
}

export default interface Store {
    state: State,
    actions: Actions,
    mutations: Mutations,
    getters: Getters,
}
