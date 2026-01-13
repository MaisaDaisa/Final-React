import { api } from '@/config';
import type { Pokemon } from 'pokenode-ts';
import { useEffect, useState } from 'react';

const useFetchTeamData = (ids: number[]) => {
    const [members, setMembers] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (ids.length === 0) {
            setMembers([]);
            return;
        }

        const fetchMembers = async () => {
            setLoading(true);
            try {
                const detailedData = await Promise.all(
                    ids.map(async (id) => {
                        return await api.getPokemonById(id);
                    }),
                );
                setMembers(detailedData);
            } catch (err) {
                console.error('Failed to fetch team members:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchMembers();
    }, [ids]);

    return { members, loading };
};

export default useFetchTeamData;
