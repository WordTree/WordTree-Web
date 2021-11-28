import type { InjectionKey, Ref } from 'vue';
import type { Language } from 'element-plus/es/locale';
export declare const useLocaleProps: {
    locale: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<Language>, never, false, never, never>;
};
declare type Translator = (...args: any[]) => string;
export declare type LocaleContext = {
    locale: Ref<Language>;
    lang: Ref<string>;
    t: Translator;
};
export declare const LocaleInjectionKey: InjectionKey<LocaleContext>;
export declare const useLocale: () => void;
export declare const localeProviderMaker: (locale?: {
    name: string;
    el: {
        colorpicker: {
            confirm: string;
            clear: string;
        };
        datepicker: {
            now: string;
            today: string;
            cancel: string;
            clear: string;
            confirm: string;
            selectDate: string;
            selectTime: string;
            startDate: string;
            startTime: string;
            endDate: string;
            endTime: string;
            prevYear: string;
            nextYear: string;
            prevMonth: string;
            nextMonth: string;
            year: string;
            month1: string;
            month2: string;
            month3: string;
            month4: string;
            month5: string;
            month6: string;
            month7: string;
            month8: string;
            month9: string;
            month10: string;
            month11: string;
            month12: string;
            week: string;
            weeks: {
                sun: string;
                mon: string;
                tue: string;
                wed: string;
                thu: string;
                fri: string;
                sat: string;
            };
            months: {
                jan: string;
                feb: string;
                mar: string;
                apr: string;
                may: string;
                jun: string;
                jul: string;
                aug: string;
                sep: string;
                oct: string;
                nov: string;
                dec: string;
            };
        };
        select: {
            loading: string;
            noMatch: string;
            noData: string;
            placeholder: string;
        };
        cascader: {
            noMatch: string;
            loading: string;
            placeholder: string;
            noData: string;
        };
        pagination: {
            goto: string;
            pagesize: string;
            total: string;
            pageClassifier: string;
            deprecationWarning: string;
        };
        messagebox: {
            title: string;
            confirm: string;
            cancel: string;
            error: string;
        };
        upload: {
            deleteTip: string;
            delete: string;
            preview: string;
            continue: string;
        };
        table: {
            emptyText: string;
            confirmFilter: string;
            resetFilter: string;
            clearFilter: string;
            sumText: string;
        };
        tree: {
            emptyText: string;
        };
        transfer: {
            noMatch: string;
            noData: string;
            titles: string[];
            filterPlaceholder: string;
            noCheckedFormat: string;
            hasCheckedFormat: string;
        };
        image: {
            error: string;
        };
        pageHeader: {
            title: string;
        };
        popconfirm: {
            confirmButtonText: string;
            cancelButtonText: string;
        };
    };
}) => {
    lang: Ref<string>;
    locale: Ref<{
        name: string;
        el: {
            colorpicker: {
                confirm: string;
                clear: string;
            };
            datepicker: {
                now: string;
                today: string;
                cancel: string;
                clear: string;
                confirm: string;
                selectDate: string;
                selectTime: string;
                startDate: string;
                startTime: string;
                endDate: string;
                endTime: string;
                prevYear: string;
                nextYear: string;
                prevMonth: string;
                nextMonth: string;
                year: string;
                month1: string;
                month2: string;
                month3: string;
                month4: string;
                month5: string;
                month6: string;
                month7: string;
                month8: string;
                month9: string;
                month10: string;
                month11: string;
                month12: string;
                week: string;
                weeks: {
                    sun: string;
                    mon: string;
                    tue: string;
                    wed: string;
                    thu: string;
                    fri: string;
                    sat: string;
                };
                months: {
                    jan: string;
                    feb: string;
                    mar: string;
                    apr: string;
                    may: string;
                    jun: string;
                    jul: string;
                    aug: string;
                    sep: string;
                    oct: string;
                    nov: string;
                    dec: string;
                };
            };
            select: {
                loading: string;
                noMatch: string;
                noData: string;
                placeholder: string;
            };
            cascader: {
                noMatch: string;
                loading: string;
                placeholder: string;
                noData: string;
            };
            pagination: {
                goto: string;
                pagesize: string;
                total: string;
                pageClassifier: string;
                deprecationWarning: string;
            };
            messagebox: {
                title: string;
                confirm: string;
                cancel: string;
                error: string;
            };
            upload: {
                deleteTip: string;
                delete: string;
                preview: string;
                continue: string;
            };
            table: {
                emptyText: string;
                confirmFilter: string;
                resetFilter: string;
                clearFilter: string;
                sumText: string;
            };
            tree: {
                emptyText: string;
            };
            transfer: {
                noMatch: string;
                noData: string;
                titles: string[];
                filterPlaceholder: string;
                noCheckedFormat: string;
                hasCheckedFormat: string;
            };
            image: {
                error: string;
            };
            pageHeader: {
                title: string;
            };
            popconfirm: {
                confirmButtonText: string;
                cancelButtonText: string;
            };
        };
    }>;
    t: (...args: any[]) => string | undefined;
};
export declare const useLocaleInject: () => LocaleContext;
export {};
