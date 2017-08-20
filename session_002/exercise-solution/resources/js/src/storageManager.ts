export default class StorageManager
{
    /**
     * write any value to localStroage
     * @param key
     * @param value
     * @return {StorageManager}
     */
    write(key: string, value: string): StorageManager
    {
        localStorage.setItem(key, value);
        return this;
    }

    /**
     * read item from localStorage or return supplied default value
     * @param key
     * @param defaultReturn
     */
    read(key: string, defaultReturn?: any): any
    {
        return (localStorage.getItem(key) ? localStorage.getItem(key) : (defaultReturn != null ? defaultReturn : null));
    }
}