import { useCallback, useState } from 'react';


interface ITarefa {
  id: number;
  title: string;
  isCompleted: boolean;
}

export const Dashboard = () => {
  const [lista, setLista] = useState<ITarefa[]>([]);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value.trim().length === 0) return;

      const value = e.currentTarget.value;

      e.currentTarget.value = '';

      setLista((oldLista) => {
        if (oldLista.some((listItem) => listItem.title === value)) return oldLista;

        return [
          ...oldLista,
          {
            title: value,
            isCompleted: false,
            id: oldLista.length,
          }
        ];
      });
    }
  }, []);

  return (
    <div>
      <p>Lista</p>

      <input onKeyDown={handleInputKeyDown} />

      <p>{lista.filter((listItem) => listItem.isCompleted).length}</p>

      <ul>
        {lista.map((listItem, index) => {
          return <li key={listItem.id}>
            <input
              type="checkbox"
              checked={listItem.isCompleted}
              onChange={() => {
                setLista(oldLista => {
                  return oldLista.map(oldListItem => {
                    const newIsCompleted = oldListItem.title === listItem.title
                      ? !oldListItem.isCompleted
                      : oldListItem.isCompleted;

                    return {
                      ...oldListItem,
                      isCompleted: newIsCompleted,
                    };
                  });
                });
              }}
            />

            {listItem.title}
          </li>;
        })}
      </ul>

    </div>
  );
}
