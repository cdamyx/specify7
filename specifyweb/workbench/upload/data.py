from typing import List, Dict, Tuple, Any, NamedTuple, Optional, Union
from typing_extensions import Protocol

from .validation_schema import CellIssue, TableIssue, NewRow, RowValidation, NewPicklistItem

Row = Dict[str, str]
Filter = Dict[str, Any]

class Exclude(NamedTuple):
    lookup: str
    table: str
    filter: Filter


class FilterPack(NamedTuple):
    filters: List[Filter]
    excludes: List[Exclude]

class ReportInfo(NamedTuple):
    "Records the table and wb cols an upload result refers to."
    tableName: str
    columns: List[str]

    def to_json(self) -> Dict:
        return self._asdict()

def json_to_ReportInfo(json: Dict) -> ReportInfo:
    return ReportInfo(**json)

class PicklistAddition(NamedTuple):
    name: str # Name of the picklist receiving the new item
    value: str # The value of the new item
    caption: str # The dataset column caption generating the addition
    id: int # The new picklistitem id

    def to_json(self) -> Dict:
        return self._asdict()

def json_to_PicklistAddition(json: Dict) -> PicklistAddition:
    return PicklistAddition(**json)

class Uploaded(NamedTuple):
    id: int
    info: ReportInfo
    picklistAdditions: List[PicklistAddition]

    def get_id(self) -> Optional[int]:
        return self.id

    def is_failure(self) -> bool:
        return False

    def validation_info(self) -> RowValidation:
        return RowValidation(
            cellIssues=[],
            tableIssues=[],
            newRows=[NewRow(
                tableName=self.info.tableName,
                columns=self.info.columns,
                id=self.id
            )],
            picklistAdditions=[NewPicklistItem(
                name=a.name,
                value=a.value,
                column=a.caption,
                id=a.id
            ) for a in self.picklistAdditions]
        )

    def to_json(self) -> Dict:
        return { 'Uploaded': dict(
            id=self.id,
            info=self.info.to_json(),
            picklistAdditions=[a.to_json() for a in self.picklistAdditions]
        )}

def json_to_Uploaded(json: Dict) -> Uploaded:
    uploaded = json['Uploaded']
    return Uploaded(
        id=uploaded['id'],
        info=json_to_ReportInfo(uploaded['info']),
        picklistAdditions=[json_to_PicklistAddition(i) for i in uploaded['picklistAdditions']]
    )


class Matched(NamedTuple):
    id: int
    info: ReportInfo

    def get_id(self) -> Optional[int]:
        return self.id

    def is_failure(self) -> bool:
        return False

    def validation_info(self) -> RowValidation:
        return RowValidation([], [], [], [])

    def to_json(self) -> Dict:
        return { 'Matched':  dict(
            id=self.id,
            info=self.info.to_json()
        )}

def json_to_Matched(json: Dict) -> Matched:
    matched = json['Matched']
    return Matched(
        id=matched['id'],
        info=json_to_ReportInfo(matched['info'])
    )


class MatchedMultiple(NamedTuple):
    ids: List[int]
    info: ReportInfo

    def get_id(self) -> Optional[int]:
        return self.ids[0]

    def is_failure(self) -> bool:
        return True

    def validation_info(self) -> RowValidation:
        return RowValidation(
            cellIssues=[],
            newRows=[],
            picklistAdditions=[],
            tableIssues=[
                TableIssue(
                    tableName=self.info.tableName,
                    columns=self.info.columns,
                    issue="Multiple records matched."
        )])

    def to_json(self):
        return { 'MatchedMultiple': dict(
            ids=self.ids,
            info=self.info.to_json()
        )}

def json_to_MatchedMultiple(json: Dict) -> MatchedMultiple:
    matchedMultiple = json['MatchedMultiple']
    return MatchedMultiple(
        ids=matchedMultiple['ids'],
        info=json_to_ReportInfo(matchedMultiple['info'])
    )

class NullRecord(NamedTuple):
    info: ReportInfo

    def get_id(self) -> Optional[int]:
        return None

    def is_failure(self) -> bool:
        return False

    def validation_info(self) -> RowValidation:
        return RowValidation([], [], [], [])

    def to_json(self):
        return { 'NullRecord': dict(info=self.info.to_json()) }

def json_to_NullRecord(json: Dict) -> NullRecord:
    nullRecord = json['NullRecord']
    return NullRecord(info=json_to_ReportInfo(nullRecord['info']))

class FailedBusinessRule(NamedTuple):
    message: str
    info: ReportInfo

    def get_id(self) -> Optional[int]:
        return None

    def is_failure(self) -> bool:
        return True

    def validation_info(self) -> RowValidation:
        return RowValidation(
            cellIssues=[],
            newRows=[],
            picklistAdditions=[],
            tableIssues=[
                TableIssue(
                    tableName=self.info.tableName,
                    columns=self.info.columns,
                    issue=self.message
        )])

    def to_json(self):
        return { self.__class__.__name__: dict(message=self.message, info=self.info.to_json()) }

def json_to_FailedBusinessRule(json: Dict) -> FailedBusinessRule:
    r = json['FailedBusinessRule']
    return FailedBusinessRule(
        message=r['message'],
        info=json_to_ReportInfo(r['info'])
    )

class NoMatch(NamedTuple):
    info: ReportInfo

    def get_id(self) -> Optional[int]:
        return None

    def is_failure(self) -> bool:
        return True

    def validation_info(self) -> RowValidation:
        return RowValidation(
            cellIssues=[],
            newRows=[],
            picklistAdditions=[],
            tableIssues=[
                TableIssue(
                    tableName=self.info.tableName,
                    columns=self.info.columns,
                    issue="No matching record for must-match table."
        )])

    def to_json(self):
        return { self.__class__.__name__: dict(info=self.info.to_json()) }

def json_to_NoMatch(json: Dict) -> NoMatch:
    r = json['NoMatch']
    return NoMatch(info=json_to_ReportInfo(r['info']))

class ParseFailures(NamedTuple):
    failures: List[CellIssue]

    def get_id(self) -> Optional[int]:
        return None

    def is_failure(self) -> bool:
        return True

    def validation_info(self) -> RowValidation:
        return RowValidation(
            cellIssues=self.failures,
            newRows=[],
            tableIssues=[],
            picklistAdditions=[],
        )

    def to_json(self):
        return { self.__class__.__name__: self._asdict() }

def json_to_ParseFailures(json: Dict) -> ParseFailures:
    r = json['ParseFailures']
    return ParseFailures(failures=[CellIssue(*i) for i in r['failures']])

RecordResult = Union[Uploaded, NoMatch, Matched, MatchedMultiple, NullRecord, FailedBusinessRule, ParseFailures]


class UploadResult(NamedTuple):
    record_result: RecordResult
    toOne: Dict[str, Any]
    toMany: Dict[str, List[Any]]

    def get_id(self) -> Optional[int]:
        return self.record_result.get_id()

    def contains_failure(self) -> bool:
        return ( self.record_result.is_failure()
                 or any(result.contains_failure() for result in self.toOne.values())
                 or any(result.contains_failure() for results in self.toMany.values() for result in results)
        )

    def validation_info(self) -> RowValidation:
        info = self.record_result.validation_info()
        toOneInfos = [r.validation_info() for r in self.toOne.values()]
        toManyInfos = [rr.validation_info() for r in self.toMany.values() for rr in r]

        return RowValidation(
            cellIssues = info.cellIssues
                + [cellIssue for info in toOneInfos for cellIssue in info.cellIssues]
                + [cellIssue for info in toManyInfos for cellIssue in info.cellIssues],

            tableIssues = info.tableIssues
                + [tableIssue for info in toOneInfos for tableIssue in info.tableIssues]
                + [tableIssue for info in toManyInfos for tableIssue in info.tableIssues],

            newRows = info.newRows
                + [newRow for info in toOneInfos for newRow in info.newRows]
                + [newRow for info in toManyInfos for newRow in info.newRows],

            picklistAdditions = info.picklistAdditions
                + [picklistAddition for info in toOneInfos for picklistAddition in info.picklistAdditions]
                + [picklistAddition for info in toManyInfos for picklistAddition in info.picklistAdditions],
        )

    def to_json(self) -> Dict:
        return { 'UploadResult': {
            'record_result': self.record_result.to_json(),
            'toOne': {k: v.to_json() for k,v in self.toOne.items()},
            'toMany': {k: [v.to_json() for v in vs] for k,vs in self.toMany.items()},
        }}

def json_to_UploadResult(json: Dict) -> UploadResult:
    return UploadResult(
        record_result=json_to_record_result(json['UploadResult']['record_result']),
        toOne={k: json_to_UploadResult(v) for k,v in json['UploadResult']['toOne'].items()},
        toMany={k: [json_to_UploadResult(v) for v in vs] for k,vs in json['UploadResult']['toMany'].items()}
    )

def json_to_record_result(json: Dict) -> RecordResult:
    for record_type in json:
        if record_type == "Uploaded":
            return json_to_Uploaded(json)
        elif record_type == "NoMatch":
            return json_to_NoMatch(json)
        elif record_type == "Matched":
            return json_to_Matched(json)
        elif record_type == "MatchedMultiple":
            return json_to_MatchedMultiple(json)
        elif record_type == "NullRecord":
            return json_to_NullRecord(json)
        elif record_type == "FailedBusinessRule":
            return json_to_FailedBusinessRule(json)
        elif record_type == "ParseFailures":
            return json_to_ParseFailures(json)
        assert False, f"record_result is unknown type: {record_type}"
    assert False, f"record_result contains no data: {json}"

class Uploadable(Protocol):
    def apply_scoping(self, collection) -> "ScopedUploadable":
        ...

    def to_json(self) -> Dict:
        ...

    def unparse(self) -> Dict:
        ...

class ScopedUploadable(Protocol):
    def bind(self, collection, row: Row) -> Union["BoundUploadable", ParseFailures]:
        ...


class BoundUploadable(Protocol):
    def is_one_to_one(self) -> bool:
        ...

    def must_match(self) -> bool:
        ...

    def filter_on(self, path: str) -> FilterPack:
        ...

    def match_row(self) -> UploadResult:
        ...

    def process_row(self) -> UploadResult:
        ...

    def force_upload_row(self) -> UploadResult:
        ...

